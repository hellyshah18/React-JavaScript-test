import { all } from "redux-saga/effects";
import { watchUser } from "./userSaga";
import { watchINC } from "./counterSaga";


export function* rootSaga()
{

    yield all([watchINC(),watchUser()])
}