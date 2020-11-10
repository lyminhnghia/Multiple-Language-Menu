import React, {useState, memo } from "react"
import { LangConstant } from "../../../const";
import {CustomerLayout} from "../../../layouts"
import {
    makeStyles,
    Box,
    IconButton 
  } from "@material-ui/core";
import './style.scss'
import { useTranslation } from "react-i18next";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import ClearIcon from '@material-ui/icons/Clear';
// import InputText from "../../../components/inputText";
// import ButtonBox from "../../../components/buttonBox";
import CategoryBox from "./Components/category"

const CategoriesCus = () =>{
    const classes = useStyles();
    const { t: getLabel } = useTranslation();
    const [listItems, setChangeListItems] = useState(categories)
    // let totalItems = 0;
    // let totalPrice = 0;
    // listItems.forEach(element => {
    //     totalItems += element.total
    //     totalPrice += element.price * element.total
    // });
    // const addQuantity = (index) =>{
    //     let newList = [...listItems]
    //     if(newList[index].total < 99){
    //         newList[index].total += 1
    //         setChangeListItems(newList);
    //     }
        
    // }
    // const removeQuantity = (index) =>{
    //     let newList = [...listItems]
    //     if(newList[index].total > 1){
    //         newList[index].total -= 1
    //         setChangeListItems(newList);
    //     }      
    // }
    // const removeItem = (index) =>{
    //     let newList = [...listItems]
    //         newList.splice(index, 1)
    //         setChangeListItems(newList); 
    // }
    // const [checked, setChecked] = useState("")
    const setChange = (id) =>{
        const classNames = document.getElementsByClassName("box-a");
        for (let i = 0; i < classNames.length; i++) {
            if(classNames[i].classList[1] == "box-change"){
                classNames[i].classList.remove("box-change")
            }
        }
        document.getElementById(id).classList.toggle("box-change")
    }
    return(
        <CustomerLayout>
            <Box className={classes.boxBorder}>
                <Box className={classes.boxHeader}>
                    <Box className={classes.boxScroll}>
                    {
                        listItems.map((category,index)=>(
                            <Box 
                                component="div"
                                display="inline"
                                key = {"category"+index}
                                id={"category"+index}
                                className={classes.boxChild}
                            >
                                <a
                                    id={"a"+index}
                                    className= "box-a"
                                    href={category.id}
                                    onClick={e=>setChange(e.target.id)}
                                >
                                    {category.name}
                                </a>
                            </Box>
                        ))
                    }
                    </Box>
                    <Box>

                    </Box>
                </Box>
                <Box className={classes.boxBody}>
                    {
                        data.map((data,index)=>(
                            <Box key={"c" + index}>
                                <CategoryBox 
                                    idItem={data.id}
                                    name={data.name}
                                    categories={data.category}/>
                            </Box>
                            
                        ))
                    }
                    
                </Box>
            </Box>          
        </CustomerLayout>
    )
}
const categories = [
    {
        id: "#comga",
        name: "Cơm gà"
    },
    {
        id: "#comthit",
        name: "Cơm thịt"
    },
    {
        id: "#comtam",
        name: "Cơm Tấm"
    },
    {
        id: "#combo",
        name: "Combo"
    },
    {
        id: "#comrang",
        name: "Cơm rang"
    }
]
const data = [
    { 
        id: "comga",
        name: "Cơm gà",
        category: [
            {
                src: "",
                name: "cơm gà sốt cay nhỏ",
                price: "100000"
            },
            {
                src: "",
                name: "cơm gà sốt me cay",
                price: "100000"
            },
            {
                src: "",
                name: "cơm gà chiên mắm tỏi",
                price: "100000"
            },
            {
                src: "",
                name: "com3",
                price: "100000"
            },
        ]
    },
    { 
        id: "comthit",
        name: "Cơm thịt",
        category: [
            {
                src: "",
                name: "com1",
                price: "100000"
            },
            {
                src: "",
                name: "com2",
                price: "100000"
            },
            {
                src: "",
                name: "com3",
                price: "100000"
            },
            {
                src: "",
                name: "com3",
                price: "100000"
            },
        ]
    },
    { 
        id: "comtam",
        name: "Cơm Tấm",
        category: [
            {
                src: "",
                name: "com1",
                price: "100000"
            },
            {
                src: "",
                name: "com2",
                price: "100000"
            },
            {
                src: "",
                name: "com3",
                price: "100000"
            },
            {
                src: "",
                name: "com3",
                price: "100000"
            },
        ]
    },
]

const useStyles = makeStyles({
    boxBorder: {
        width: "100%",
        backgroundColor: "rgb(0 0 0 / 0.1)",
    },
    boxHeader: {
        display: "flex",
        overflowX: "scroll",
        height: "39px",
        backgroundColor: "#ffffff",
        paddingTop: "10px",
        position: "sticky",
        top: 0,
        borderBottom: "1px solid rgb(0 0 0 / 0.1)",
        "&::-webkit-scrollbar": {
            height: "0px"
        },
        zIndex: "100"
    },
    boxChild: {

    },
    boxScroll: {
        minWidth: "max-content",
    },
    boxBody: {

    },
    boxA:{
        textDecoration: "none",
        color: "black"
    }
});
export default memo(CategoriesCus);