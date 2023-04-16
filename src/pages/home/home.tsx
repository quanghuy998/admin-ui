import { useUsers } from '../../state/users';

const Home = () => {
    const { users, isFetching } = useUsers();
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
