import './Sidebar.scss';
import { connect } from 'react-redux';
import Videolist from '../Videolist/Videolist';
import Searchbar from '../Searchbar/Searchbar';
import { useState } from 'react';

export function Sidebar(props) {

    const [windowVisibility, setVisibility] = useState("displaypanel");

    function handleSearchToggle() {
        if (windowVisibility === "displaypanel") {
            setVisibility("hiddenpanel")
        } else {
            setVisibility("displaypanel");
        }
    }

   if (!props.videoListIsAvialable) {
    return ( 
        <>
            <div className='outerverticalcontainer'>
           
                {/* Inside the Sidebar  */}
                <button className='barbutton' onClick={handleSearchToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
                </button>
                <button className='barbutton' onClick={handleSearchToggle}>
<<<<<<< HEAD
                <svg xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" data-name="Layer 1" viewBox="0 0 24 24" id="information-sign"><path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg>
=======
                    <svg xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
>>>>>>> 4a24c6c... created better designing of the design
                </button>
                <button className='barbutton' onClick={handleSearchToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
                </button>

                {/* Hidden Panel     */}
                <div className={windowVisibility}>
                    <Searchbar />
                </div>
            </div>
        </>   
    )
   } else {
    return (
        <>
            <div className='outerverticalcontainer'>
            {/* Hidden Panel     */}

            
            <div className={windowVisibility}>
            <Searchbar />
            
<<<<<<< HEAD
            <div className="innervideolistdiv" >
            
            <div className="marginvideolistdiv" ><Videolist /></div>
=======
            <div class="innervideolistdiv" >
            
            <div class="marginvideolistdiv" ><Videolist /></div>
>>>>>>> 4a24c6c... created better designing of the design
            </div>


            </div>
            {/* Inside the Sidebar  */}
            <button className='barbutton' onClick={handleSearchToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
                </button>
                <button className='barbutton' onClick={handleSearchToggle}>
<<<<<<< HEAD
                <svg xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" data-name="Layer 1" viewBox="0 0 24 24" id="information-sign"><path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"></path></svg>
=======
                    <svg xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
>>>>>>> 4a24c6c... created better designing of the design
                </button>
                <button className='barbutton' onClick={handleSearchToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill = "#e3e4e5" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
                </button>
            </div>
        </>   
    )
   }
}

// The problem was I messed up me exports / imports... always double check that!
const mapStateToProps = (state) => {
    return { videoListIsAvialable: state.videoListAvailable};
  };

  export default connect(mapStateToProps)(Sidebar);