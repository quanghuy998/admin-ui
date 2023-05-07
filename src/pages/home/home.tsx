import { Button, Card, CardActions, CardContent } from '@mui/material';

import './home.scss';

const Home: React.FC = () => {
    return (
        <div className="home-welcome-container">
            <Card sx={{ minWidth: 400, maxWidth: 800 }} className="home-welcome">
                <CardContent>
                    <div className="logo">Orange</div>
                    <p>Welcome!</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magnam at doloribus quisquam,
                        vitae facilis impedit distinctio vero, ipsa assumenda atque repellat totam cupiditate quod quia
                        libero quidem. Ab, repellat?
                    </p>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Home;
