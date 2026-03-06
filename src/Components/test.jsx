import { useDispatch }  from 'react-redux';
import React, { useState } from 'react';
import { getUser } from '../redux/action/actionfile';
export const Testcomponent = ()=>{
    const dispatch = useDispatch();
    const handler=()=>{
       dispatch(getUser("test"))
    }
    return (<div>
        <div>hello hhh </div>
       <button onClick={handler}>click</button>
        </div>
    )
}