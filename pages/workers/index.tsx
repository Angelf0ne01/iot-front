import styled from "@emotion/styled";
import { Button as ButtonMui } from "@mui/material";
import { useRouter } from "next/router";
import react from "react";
import Card from "../../components/card";
import { Layout } from "../../storybook/atoms/Layout";

const data = [
  {
    id: "1",
    label: "test1",
    description: "test2",
  },
  {
    id: "1",
    label: "test1",
    description: "test2",
  },
  {
    id: "1",
    label: "test1",
    description: "test2",
  },
];
const Button = styled(ButtonMui)`
  height: 30px;
  width: 200px;
`;

const CardList = styled.div`
  display: flex;
  width: 100%;
`;

const Title = styled.h2`
  font-weight: 300;
  height: 20px;
`;

const Spacer = styled.div<{ sx: string }>`
  height: ${({ sx }) => sx};
  width: ${({ sx }) => sx};
`;

const CardWrapper = styled.div`
  display: flex;
  width: 750px;
  height: 600px;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const WorkerDashboard = () => {
  const router = useRouter();

  const handleOnNew = () => {
    router.push(`/workers/new`);
  };

  const handleOnWorkerDetails = (workerId: string) => {
    router.push(`/workers/${workerId}`);
  };

  return (
    <Layout title="Workers">
      <CardWrapper>
        <TitleWrapper>
          <Title>Workers</Title>
          <Button variant="outlined" onClick={handleOnNew}>
            Agregar Worker
          </Button>
        </TitleWrapper>
        <Spacer sx={"4px"} />
        <CardList>
          {data?.map(({ label, description, id }, key) => (
            <Card
              id={id}
              title={label}
              description={description}
              key={key}
              onClick={handleOnWorkerDetails}
            />
          ))}
        </CardList>
      </CardWrapper>
    </Layout>
  );
};

export default WorkerDashboard;
