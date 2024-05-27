import { call, put, takeLatest } from "redux-saga/effects";
import { UserError, UserSuc } from "../action/userAction";
import { getUserData } from "../APIUser";


//const { takeLatest, call, put } = require("redux-saga/effects")

function* asyncUser()
{
    try
    {
        let d = yield call(getUserData);

    
        yield put(UserSuc(d.data)) ;  
    }
    catch(error)
    {

        yield put(UserError(error))
    }

}


export function* watchUser()
{

     yield takeLatest('UserRequest',asyncUser);
}