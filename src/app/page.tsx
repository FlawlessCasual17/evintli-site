import filterIcon from '../../public/filter-icon.svg'
import searchIcon from '../../public/search-icon.svg'
import logoText from '../../public/logo.svg'
import Image from 'next/image';
import sty from './page.module.css'

export default function Home() {
    return (
        <div className='flex flex-row justify-center-safe scale-200' id='front_page'>
            <div className='absolute shrink-0 h-[53px] w-[591px] top-0' id='absolute_shrink0_h53px'>
                <div className='absolute w-[1512px] h-[3px] top-[117px] left-0' id='absolute_w1512px_h3px'>
                    <div className='absolute w-[591px] h-[53px] top-0 left-[433px]' id='search_and_filter_1'>
                        <div className='relative w-[595px] h-[53px]' id='search_and_filter_2'>
                            <div className='absolute w-[591px] h-[53px] top-0' id='search_and_filter_3'>
                                <div className='relative h-[53px]' id='search_and_filter_4'>
                                    <div className='absolute w-[595px] h-[53px] top-0 left-0' id='filter__and__search_bar'>
                                        <div className={sty.addListing} id='add_listing'>
                                            <div>Add Listing</div>
                                        </div>

                                        <Image
                                            className='absolute top-1 left-[34rem] w-[43px] h-[45px]'
                                            id='filter'
                                            src={filterIcon}
                                            alt='filter'
                                        />

                                        <Image
                                            className='absolute w-[43px] h-11 top-1 left-[491px]'
                                            id='search_icon'
                                            src={searchIcon}
                                            alt='search'
                                        />

                                        <div className={`${sty.searchBar} shadow-[0px_0px_4px_#00000040]`} id='search_bar'>
                                            <div className='relative flex flex-row' id='sub_headers'>
                                                <div className={`${sty.subHeader} left-8`} id='where_sub_header'>
                                                    Where?
                                                </div>
                                                <div className={`${sty.subHeader} left-36`} id='search_sub_header'>
                                                    Search
                                                </div>
                                            </div>

                                            <div className='relative flex flex-row top-4' id='descriptions'>
                                                <div className={`${sty.description} left-0.5`} id='where_description'>
                                                    Search Location
                                                </div>
                                                <div className={`${sty.description}  left-[66px]`} id='search_description'>
                                                    What are you looking for?
                                                </div>
                                            </div>
                                        </div>

                                        <div className='absolute w-px h-[35px] top-2 left-[198px]' id='divider'>
                                            <svg width='1' height='35' viewBox='0 0 1 35' fill='none'>
                                                <line
                                                    x1='0.5'
                                                    y1='0.5'
                                                    x2='0.499998'
                                                    y2='34.5'
                                                    stroke='#71767C'
                                                    strokeLinecap='round'
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Image
                        className='absolute w-[101px] h-[37px]'
                        id='logo_text'
                        src={logoText}
                        alt='logo of Evintli'
                    />
                </div>
            </div>
        </div>
    );
}
