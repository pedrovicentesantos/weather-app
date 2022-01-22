import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import Content from '../components/Content';
import StyledDiv from '../styles/styled';

interface IBGEUFResponse {
  sigla: string;
}

const Home: NextPage = () => {
  const [ufs, setUfs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);	

  const getUfs = async () => {
    try {
      setIsLoading(true);
      const response = await axios
        .get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
      const ufInitials = response.data.map(uf => uf.sigla);
      setUfs(ufInitials);
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUfs();
  }, []);

  return (
    <StyledDiv>
      <Head>
        <title>Weather App</title>
      </Head>
      {isLoading ? (
        <Loader />
      ) : (
        <Content ufs={ufs} />
      )}
    </StyledDiv>
  );
}

export default Home;
