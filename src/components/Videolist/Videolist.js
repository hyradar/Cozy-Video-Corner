import './Videolist.scss';
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {updateVideoDisplay, updateDisplayVideoAvailability} from "../../actions";
export function Videolist(props) {

    const dispatch = useDispatch();
    
    const idCreater = () => {
      let uniqueId = () => parseInt(Date.now() * Math.random()).toString();
      return uniqueId;
    };

    function displayVideo(video) {
        dispatch(updateVideoDisplay(video));
        dispatch(updateDisplayVideoAvailability(true));
    }

        return(
            <ul className="listcontainer">
                { props.vids.vids.map(video => (
                    <li key={video.id.videoId}>
                        <button onClick={() => displayVideo(video)} className="container">
                            <div className="videodetailsdiv">
                                <div className="videonamediv">
                                    <h1 className="videoname">{video.snippet.title}</h1>
                                </div>
                                
                                <div className="channelnamediv">
                                    <p className="channelname">{video.snippet.channelTitle}</p>
                                </div>
                            </div>
                                <p className="videodescription">{video.snippet.description}</p>      
                        </button>
                    </li>   


                ))}
            </ul>
        )
   
}

const mapStateToProps = (state) => {
    return { 
        vids: state.vids,
    };
  }

export default connect(mapStateToProps)(Videolist);


{/* Switch to this when you run out of API calls */}
{/* <p className="videoname"> A testing video name of a video thing</p>
<p className="channelname">Channel name</p>
<p className="videodescription">This is a long message of around 100 characters to show that this is the drescription of a video I found threw the API thanks you very mcuh</p> */}

{/* In order to get this information I need to update my API call */}
{/* https://stackoverflow.com/questions/27393842/contentdetails-or-duration-not-coming-using-youtube-v3-api */}
{/* <p>{video.contentDetails.duration}</p> */}

{/* Buttons to send info to console */}
{/* <button onClick={console.log(video.snippet.thumbnails)}>Button</button> */}
{/* <button onClick={console.log(Object.keys(video.snippet))}>click</button> */}