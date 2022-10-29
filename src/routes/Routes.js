import React from "react";
import {
    BrowserRouter,
    Route,
    Routes as ReactDomRoutes,
} from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Wrapper from "../components/Wrapper/Wrapper";
import Home from '../pages/Home/Home';
import ToDo from '../pages/ToDoList/ToDoList'

const Routes = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Wrapper>
                    <ReactDomRoutes>
                        <Route path='/Home' element={<Home/>}/>
                        <Route path='/TodoList' element={<ToDo/>}/>
                    </ReactDomRoutes>
                </Wrapper>
            </Layout>
        </BrowserRouter>
    )
}

export default Routes;