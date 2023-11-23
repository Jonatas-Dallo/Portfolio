import styled from 'styled-components';
import ProgressBar from 'react-bootstrap/ProgressBar';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const ProgressBars = styled.div`
  text-align: center;
`;

export const StyledProgressBar = styled(ProgressBar)`
  margin-bottom: 20px;
`;

// Exemplo de uso no seu componente React
export default function Hardskills() {
    return (
        <Container>
            <div className='container'>
                <div className="col-lg-12">
                    <div className='row'>
                        {/* bg-warning, bg-success, bg-danger, bg-white, bg-info */}
                        <ProgressBars>
                            <div style={{backgroundColor: "danger", width: "1295px", marginBottom: "20px", border: "3px solid #f9004d"}}>
                                <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" style={{width:"50%"}}>React - 50%</div> 
                            </div>
                            <div style={{backgroundColor: "danger", width: "1295px", marginBottom: "20px", border: "3px solid #f9004d"}}>
                                <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" style={{width:"70%"}}>JavaScript - 70%</div> 
                            </div> 
                            <div style={{backgroundColor: "danger", width: "1295px", marginBottom: "20px", border: "3px solid #f9004d"}}>
                                <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" style={{width:"60%"}}>TypeScript - 60%</div> 
                            </div>                            
                            <StyledProgressBar striped animated variant='info' now={20} />
                            <StyledProgressBar striped animated variant='warning' now={60} />
                            <StyledProgressBar striped animated variant='danger' now={80} />
                        </ProgressBars>
                    </div>
                </div>
            </div>
        </Container>
    );
}
