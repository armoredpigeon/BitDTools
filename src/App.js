import logo from "./logo.svg";
import "./App.css";
import GetNPC from "./options";
import styled from "styled-components";

const OverallDiv = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  max-width: 80%;
  gap: 0.5rem;
`;

const ResultsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding 0.5rem
`;

const TopRow = styled.span`
  font-weight: bold;
`;

const BottomRow = styled.span``;

function App() {
  let NPC = GetNPC();
  return (
    <div className="App">
      <></>
      <OverallDiv>
        <ResultsDiv>
          <TopRow>fullName</TopRow>
          <BottomRow>{NPC.fullName}</BottomRow>
        </ResultsDiv>
        <ResultsDiv>
          <TopRow>heritage</TopRow>
          <BottomRow>{NPC.heritage}</BottomRow>
        </ResultsDiv>
        <ResultsDiv>
          <TopRow>gender</TopRow>
          <BottomRow>{NPC.gender}</BottomRow>
        </ResultsDiv>
        <ResultsDiv>
          <TopRow>looks</TopRow>
          <BottomRow>{NPC.looks}</BottomRow>
        </ResultsDiv>
        <ResultsDiv>
          <TopRow>goal</TopRow>
          <BottomRow>{NPC.goal}</BottomRow>
        </ResultsDiv>
        <ResultsDiv>
          <TopRow>preferredMethod</TopRow>
          <BottomRow>{NPC.preferredMethod}</BottomRow>
        </ResultsDiv>
        <ResultsDiv>
          <TopRow>profession</TopRow>
          <BottomRow>{NPC.profession}</BottomRow>
        </ResultsDiv>
        <ResultsDiv>
          <TopRow>style</TopRow>
          <BottomRow>{NPC.style}</BottomRow>
        </ResultsDiv>
        <ResultsDiv>
          <TopRow>trait</TopRow>
          <BottomRow>{NPC.trait}</BottomRow>
        </ResultsDiv>
        <ResultsDiv>
          <TopRow>interest</TopRow>
          <BottomRow>{NPC.interest}</BottomRow>
        </ResultsDiv>
        <ResultsDiv>
          <TopRow>quirk</TopRow>
          <BottomRow>{NPC.quirk}</BottomRow>
        </ResultsDiv>
      </OverallDiv>
    </div>
  );
}

export default App;
