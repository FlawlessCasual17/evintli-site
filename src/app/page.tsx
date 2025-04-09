import Image from 'next/image';

export default function Home() {
    return (
        <div>
            {/* TODO: Finish the front page design */}
            <main className='relative flex' id='top_section'>
                <Image
                    id='logo'
                    src='../../public/logo.svg'
                    alt='Evintli logo'
                    width={101}
                    height={37}
                />
                <div className='items-center' id='searchbar_and_filter'>
                </div>
            </main>
        </div>
    );
}
