import { useEffect } from 'react';
import { getUsersAsync } from '../../api/users/user.service';
import axiosClient from '../../api/axiosClient';

const Home = () => {
    useEffect(() => {
        const fetchData = async () => {
            const data = await getUsersAsync();
            console.log(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="container">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, id maxime aspernatur at architecto
                quidem perferendis perspiciatis nobis, minima est quaerat eius provident fuga veritatis sequi, delectus
                repellat vel dolorum?
            </div>
        </div>
    );
};

export default Home;
