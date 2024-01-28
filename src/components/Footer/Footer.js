import React from 'react';
import "./Footer.css";
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_links'>
            <div className='footer_links_1'>
                <h4>Get to Know Us</h4>
                <ul>
                    <li><a href="skf">Careers</a></li>
                    <li><a href="skf">Blog</a></li>
                    <li><a href="skf">About Amazon</a></li>
                    <li><a href="skf">Investor Relations</a></li>
                    <li><a href="skf">Amazon Devices</a></li>
                    <li><a href="skf">Amazon Science</a></li>
                </ul>
            </div>
            <div className='footer_links_2'>
                <h4>Make Money with Us</h4>
                <ul>
                    <li><a href="lksdjfh">Sell products on Amazon</a></li>
                    <li><a href="lksdjfh"></a>Sell on Amazon Business</li>
                    <li><a href="lksdjfh"></a>Sell apps on Amazon</li>
                    <li><a href="lksdjfh"></a>Become an Affiliate</li>
                    <li><a href="lksdjfh"></a>Advertise Your Products</li>
                    <li><a href="lksdjfh"></a>Self-Publish with Us</li>
                    <li><a href="lksdjfh"></a>Host an Amazon Hub</li>
                    <li><a href="lksdjfh"></a>›See More Make Money with Us</li>
                </ul>
            </div>
            <div className='footer_links_3'>
                <h4> Amazon Payment Products</h4>
                <ul>
                    <li><a href="abc">Amazon Business Card</a></li>
                    <li><a href="abc">Shop with Points</a></li>
                    <li><a href="abc">Reload Your Balance</a></li>
                    <li><a href="abc">Amazon Currency Converter</a></li>
                </ul>
            </div>
            <div className='footer_links_4'>
                <h4> Let Us Help You</h4>
                <ul>
                    <li><a href="ccc">Amazon and COVID-19</a></li>
                    <li><a href="ccc">Your Account</a></li>
                    <li><a href="ccc">Your Orders</a></li>
                    <li><a href="ccc">Shipping Rates & Policies</a></li>
                    <li><a href="ccc">Returns & Replacements</a></li>
                    <li><a href="ccc">Manage Your Content and Devices</a></li>
                    <li><a href="ccc">Amazon Assistant</a></li>
                    <li><a href="ccc">Help</a></li>
                </ul>
            </div>
        </div>
        <div className='footer_info'>
            <div className='footer_info1'>
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </div>
            <div className="footer_info2">
            <div className='footer_language'>
                <div className="footer_language_icone">
                <LanguageIcon/> 
                </div>
                <span> English </span>
            </div>
            <div className='footer_currency'>
            $USD - U.S. Dollar
            </div>
            <div className='footer_flag'>
            United States
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer