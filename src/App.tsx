import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import styled from "styled-components";

const CenterDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

function App() {
    const [data, setData] = React.useState("Not Found");
    const [torchOn, setTorchOn] = React.useState(false);

    return (
        <>
            <CenterDiv>
                <BarcodeScannerComponent
                    width={320}
                    height={320}
                    torch={torchOn}
                    onUpdate={(err, result) => {
                        if (result) setData(result.text);
                        else setData("Not Found");
                    }}
                />
                <p>{data}</p>
                <button onClick={() => setTorchOn(!torchOn)}>
                    Switch Torch {torchOn ? "Off" : "On"}
                </button>
            </CenterDiv>
        </>
    );
}

export default App;