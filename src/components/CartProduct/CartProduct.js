import React,{useState} from "react";
import "./CarProduct.css";
import data from "../CartProductAll/data"
//Mui
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Air from "../../assets/Air-Purifier.png";

export default function CartProduct() {
  const [flag, setFlag] = useState(true);
  const handleOnclick = () =>{
    setFlag(false)
  }
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <div>
      <div className="cartProduct">
        <div className="cartMain">
          <div>
            <div className="cartText">
              <span>Rice Cooker</span>
            </div>
            <div className="cartItem">
              <div className="cartTextItem">
                Aroma 1.5L Automatic Rice Cooker Black Aroma 1.5L
              </div>
            </div>
            <img src={Air} />
            <div className="cartSale">
              <span>Sale</span>
              
            </div>
            {flag === true ? <button className="cartButton" onClick={handleOnclick}>+</button> : <>
              
              <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        
        <ButtonGroup className="buttonCount">
          <Button
          className="buttonItem"
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <span className="count">{count}</span>
          <Button
          className="buttonItem"
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      
    </Box>
              
              </>}
            
          </div>
        </div>
      </div>
    </div>
  );
}
