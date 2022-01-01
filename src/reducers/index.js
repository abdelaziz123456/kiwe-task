import { ADD_PROPERTY } from "../actions/types";

const initState=[
    {
        id:1,
        name:'Driggs Realty',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        address:'900 East Boston Street Lagrange GA 30240',
        locality:'Gota',
        price:300000,
        bedroom:3,
        bath:3,
        carpetArea:300


    },
    {

        id:2,
        name:'Magnolia Group Real Estate',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        address:'839 W. Sleepy Hollow Rd.Cumberland, RI 02864',
        locality:'sola',
        price:150000,
        bedroom:4,
        bath:3,
        carpetArea:150

    },
    {
        id:3,
        name:'Cardinal Realty',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        address:'641 4th St.Lewiston, ME 04240',
        locality:'Giza',
        price:240000,
        bedroom:2,
        bath:5,
        carpetArea:400

    },
    {
        id:4,
        name:'Forward Real Estate Advisors',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        address:'54 Summerhouse Drive Stillwater, MN 55082',
        locality:'Alex',
        price:400000,
        bedroom:6,
        bath:2,
        carpetArea:1500

    },
    {
        id:5,
        name:'Driggs Realty',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        address:'900 East Boston Street Lagrange GA 30240',
        locality:'Gota',
        price:300000,
        bedroom:3,
        bath:3,
        carpetArea:300


    },
    {

        id:6,
        name:'Magnolia Group Real Estate',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        address:'839 W. Sleepy Hollow Rd.Cumberland, RI 02864',
        locality:'sola',
        price:150000,
        bedroom:4,
        bath:3,
        carpetArea:150

    },
    {
        id:7,
        name:'Cardinal Realty',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        address:'641 4th St.Lewiston, ME 04240',
        locality:'Giza',
        price:240000,
        bedroom:2,
        bath:5,
        carpetArea:400

    },
    {
        id:8,
        name:'Forward Real Estate Advisors',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        address:'54 Summerhouse Drive Stillwater, MN 55082',
        locality:'Alex',
        price:400000,
        bedroom:6,
        bath:2,
        carpetArea:1500

    }
];


const reducer=(state=initState,action)=>{
    let properties=[];
    if(action.type===ADD_PROPERTY){
        properties=[...state,action.property];
        return properties;
    }else{
        return state
    }
}

export default reducer ;