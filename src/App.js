import Users from "./components/users/Users";
import {useState} from "react";
import {getUserPost} from "./components/services/users.api.service";
import './App.css'
import Posts from "./components/posts/Posts";

export default function App() {
    let [posts,setPosts] = useState([])

    const elevate = (id) => {
        getUserPost(id).then(({data}) => {
            setPosts([...data]);
        })
    }
    return (
        <div className={'fb'}>
            <div className={'left'}><Users elevate={elevate}/></div>

            <Posts posts={posts}/>
        </div>
    );
}

