import { useNavigate } from 'react-router-dom';

const Index = (props) => {
    const navigate = useNavigate();
    return(
        navigate("/Home")
    )
}

export default Index;