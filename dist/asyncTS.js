"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const makePromiseString = () => {
    return new Promise((resolve, reject) => {
        const data = 'BD';
        if (data) {
            resolve(data);
        }
        else {
            reject('request rejected');
        }
    });
};
const getPromiseString = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getPromiseString();
    return data;
});
getPromiseString();
const makePromiseObject = () => {
    return new Promise((resolve, reject) => {
        const user = { name: 'MSA' };
        if (user) {
            resolve(user);
        }
        else {
            reject("Cant find user");
        }
    });
};
const getPromiseObject = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseObject();
    return data;
});
const data = getPromiseObject();
