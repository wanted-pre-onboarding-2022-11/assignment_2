import React, { useContext, useRef } from "react";
import { IssuesContainer, Notification, Loading } from "@pages/Home/Home.styled";
// import useInfinityScroll from "@hooks/useInfinityScroll";
import { IssueItem, Error } from "@components";
import { IssueListContext } from "@/contexts/IssueContext";

const Home = () => {
  const { issueList, isLoading, isEndData, isError, handleNextPage } = useContext(IssueListContext);

  const obsRef = useRef(null);

  // useInfinityScroll(obsRef, isLoading, isEndData, handleNextPage);

  if (isError) return <Error />;

  return (
    <IssuesContainer>
      <div>
        {issueList.map((e, i) => (
          <IssueItem
            key={e.id}
            issuenumber={e.number}
            title={e.title}
            owner={e.user.login}
            createdAt={e.created_at}
            comments={e.comments}
            isAdvertisement={i === 3}
          ></IssueItem>
        ))}
        {isEndData && <Notification>더 이상 불러올 데이터가 없습니다.</Notification>}
        <div ref={obsRef}>{isLoading && <Loading>로딩중...</Loading>}</div>
      </div>
    </IssuesContainer>
  );
};

export default Home;
