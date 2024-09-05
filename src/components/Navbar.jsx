import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { NavLink, useNavigate } from 'react-router-dom';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { useAxios } from '../hooks/useAxios';
import { API_KEY } from '../hooks/useEnv';
import { AutoComplete } from 'antd';


export default function Navbar() {
    const [options , setOptions] = React.useState([])
    const navigate = useNavigate()

      const handleSearchMovie = (e) => {
        useAxios().get(`/search/movie?query=${e}&include_adult=false&api_key=${API_KEY}`).then(res => {
            setOptions(res.data.results.map(item => ({ value: item.title , id : item.id})));
            
        })
      }
      const handleChooseMovie = (a , b) => {
        navigate(`${b.id}`)
      }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='py-2' position="static" color = "transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <SlideshowIcon className='scale-[1.5]'/>
          </IconButton>
          <Typography
            className='space-x-5'
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <NavLink className={"p-3 rounded-[25px] text-[18px]"} to={"/"}>Now Playing</NavLink>
            <NavLink className={"p-3 rounded-[25px] text-[18px]"} to={"/popular"}>Popular</NavLink>
            <NavLink className={"p-3 rounded-[25px] text-[18px]"} to={"/top-rated"}>Top Rasted</NavLink>
            <NavLink className={"p-3 rounded-[25px] text-[18px]"} to={"/up-comming"}>Up Coming</NavLink>
          </Typography>
          
            <AutoComplete
                size= "large"
                onSearch={handleSearchMovie}
                onSelect={handleChooseMovie}
                allowClear
                style={{ width: 350 }}
                options={options}
                placeholder="Search movie"
              />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
