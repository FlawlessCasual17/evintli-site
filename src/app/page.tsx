import logoText from 'logo.svg'
import Image from 'next/image';
import sty from './page.module.css'

export default function Home() {
    return (
        <div className='flex flex-row justify-center-safe' id='frame'>
            <div className='absolute shrink-0 h-[53px] w-[591px] top-0'>
                <div className='absolute w-[1512px] h-[3px] top-[117px] left-0'>
                    <div className='absolute w-[591px] h-[53px] top-0 left-[433px]'>
                        <div className='relative w-[595px] h-[53px]'>
                            <div className='absolute w-[591px] h-[53px] top-0'>
                                <div className='relative h-[53px]'>
                                    <div className='absolute w-[595px] h-[53px] top-0 left-0'>
                                        <div className={sty.filterIcon} id='filter'>
                                            {/* Put filter icon here. */}
                                        </div>

                                        <div className={sty.searchBar} id='search_bar'>
                                            <div className={`${sty.searchComponent} left-[13px]`} id='search_location'>
                                                Search Location
                                            </div>
                                            <p className={`${sty.searchComponent} left-[221px]`}>
                                                What are you looking for?
                                            </p>
                                            {/* Put search icon here. */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className='absolute w-px h-[35px] top-px left-[198px]'
                                id='divider'
                            >
                                <svg width='1' height='35' viewBox='0 0 1 35' fill='none'>
                                    <line
                                        x1='0.5'
                                        y1='0.5'
                                        x2='0.499998'
                                        y2='34.5'
                                        stroke='#71767C'
                                        stroke-linecap='round'
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <Image
                        className='absolute w-[101px] h-[37px]'
                        id='logo_text'
                        src={logoText}
                        alt='logo with text'
                    />
                </div>
            </div>
        </div>
    );
}
