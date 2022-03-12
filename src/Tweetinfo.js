import Navigationv3 from "./Navigationv3";
import './App.css'
import Map from './map'
import { fontFamily } from "@mui/system";
export default function Tweetinfo() {
    return (
        <div>
            <Navigationv3/>
            <div className='Tweet-header'>
                <div className='upper-half'>
                    <div className='upper-half-content'>
                        <div className='User-picture'>
                            <img className='userimg' src='https://pbs.twimg.com/profile_images/1496875595459969025/wTfUCRuO_400x400.jpg' alt='User Image'/>
                            <br/><br/>
                            <h4>@PrimeAerknight</h4>
                        </div>
                        <div className='User-tweet'>
                            <h4>Tweet:</h4>  <p className='tweetfont'>RT @VALORANTING: Leaked map update: https://t.co/FLjDSuxaHJ</p>
                            <h4>Hashtags:</h4> <p>#valorant #riotgames</p>
                            <h4>Created at:</h4> <p>2022-01-30T09:23:39.000Z </p>
                            <h4>Language:</h4> <p>en</p>
                            <h4>likes:</h4> <p>456</p>
                            <h4>replies:</h4> <p>22</p>
                            <h4>retweets:</h4> <p>12</p>
                            <h4>source:</h4> <p>Twitter for Android</p>
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
