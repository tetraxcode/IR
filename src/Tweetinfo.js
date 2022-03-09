import Navigationv3 from "./Navigationv3";
import './App.css'
import Map from './map'
export default function Tweetinfo() {
    return (
        <div>
            <Navigationv3/>
            <div className='Tweet-header'>
                <div className='upper-half'>
                    <div className='upper-half-content'>
                        <div className='User-picture'>
                            <img className='userimg' src='https://pbs.twimg.com/profile_images/1358355706714361857/fy5ie25D_400x400.jpg' alt='User Image'/>
                            <h4>Abhinav Reddy</h4>
                        </div>
                        <div className='User-tweet'>
                            <h1>Tweet</h1>
                            <h4>This is a sample tweet</h4>
                            <h4>Hashtags: </h4>
                            <h4>Created at: </h4>
                        </div>
                    </div>
                </div>
                <div className='lower-half'>
                    <h1>Geo-location</h1>
                    <Map/>
                </div>
            </div>
        </div>
    );
}
