import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    zIndex: 1,
    maxWidth: '30%',
    top: theme.spacing(7),
    borderRadius: "25px",
    backgroundColor: "#EEEEEE",
    '&:hover': {
        backgroundColor: "#7DE5ED",
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#001253',

    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function SearchComponent(props) {
    const { setSearchInput, searchInput, } = props;
    let inputHandler = (e) => {
        //convert input text to lower case
        // var lowerCase = e.target.value.toLowerCase();
        var lowerCase = e.target.value;
        setSearchInput(lowerCase);
    };
    // const handleKeyPress = (e) => {
    //     if (e.keyCode === 13) {
    //         searchClients();
    //     }
    // };
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                variant="outlined"
                placeholder="Search…"
                value={searchInput}
                inputProps={{ 'aria-label': 'search' }}
                onChange={inputHandler}
                // onKeyDown={handleKeyPress}
            />
            {/* {search ?
                <Button sx={{
                    borderRadius: "25px",
                    textTransform: "none",
                    position: "absolute",
                    right: 2.5,
                    top: 4
                }}
                    variant="contained" color="secondary" size="small">search</Button> : null
            } */}
        </Search>
    )
}

export default SearchComponent