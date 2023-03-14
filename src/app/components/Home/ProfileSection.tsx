"use client";

import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import { config } from '../../../../config'
import useAPI from '@/app/hooks/useAPI';

const ProfileSection = () => {
  const [image, setImage] = useState('');
  const [online, setOnline] = useState(false);
  const { data, isLoading, error } : any = useAPI(config.profile_section.discord_api, 10000);
  useEffect(() => {
      setImage(`https://cdn.discordapp.com/avatars/${data?.data.discord_user.id}/${data?.data.discord_user.avatar}`)
      if(data?.data.active_on_discord_web && data?.data.active_on_discord_mobile && data?.data.active_on_discord_desktop){
        setOnline(true);
      }
  }, [data])
  return (
    <div className='w-[362px] h-auto mx-auto md:mb-0 mb-10 bg-gradient-to-b from-profile_bg_top via-profile_bg_bottom to-profile_bg_middle rounded-[20px] py-2.5 '>
        <div className='w-[95%] mx-auto rounded-[13px] bg-gradient-to-b from-profile_con_top via-profile_con_middle to-profile_con_bottom pb-8'>
          <Image 
              src={config.profile_section.banner}
              alt="profile_banner"
              width={344}
              height={132.83}
              className='rounded-t-[13px]'
            />
          {/* Profile Pic Container */}
          <div className='bg-profile_con_top w-[100px] h-[100px] ml-5 mt-[-50px] rounded-full z-50 relative flex flex-col justify-center'> 
            <Image
              src={image != '' ? image : "https://us-east-1.tixte.net/uploads/data_of_omega.tixte.co/discord-loading.gif"}
              alt="profile_pic"
              width={90}
              height={90}
              className='rounded-full mx-auto'
            />
            <div className='bg-profile_con_top w-6 h-6 rounded-full absolute right-1 bottom-1 flex flex-col justify-center'>
              <div className={data?.data.discord_status == "online" ? 'bg-[#23A559] w-4 h-4 mx-auto rounded-full' : data?.data.discord_status == "idle" ? 'bg-[#FAA61A] w-4 h-4 mx-auto rounded-full' : data?.data.discord_status == "dnd" ? 'bg-[#F04747] w-4 h-4 mx-auto rounded-full' : 'bg-[#747F8D] w-4 h-4 mx-auto rounded-full'}>
              </div>
            </div>
          </div>
          {/* Content Container */}
          <div className='bg-gradient-to-b from-profile_content_con_top to-profile_content_con_bottom w-[86%] mx-auto rounded-[0.6rem] mt-7 py-2'>
            <div className='w-[88%] mx-auto'>
              {/* DISCORD USERNAME SECTION START*/}
              <div className='flex flex-row'>
              {!isLoading ? (
                <>
                  <h2 className="font-bold text-[1.1875rem] mr-1 text-profile_name">
                    {data?.data.discord_user.username}
                  </h2>
                  <h2 className="font-bold text-[1.1875rem] text-profile_hash_tag">
                    #{data?.data.discord_user.discriminator}
                  </h2>
                </>
                ) : (
                  <>
                  </>
                )}
              </div>
              {/* DISCORD USERNAME SECTION END*/}

              {/* DISCORD STATUS SECTION START*/}
              <p className='font-medium text-xs mt-2 text-profile_status'>
                {online ? `${data?.data.activities[0].emoji.name} ${data?.data.activities[0].state}` : `😿 ${!isLoading ? data?.data.discord_user.username : ""} is not online.`}
              </p>
              {/* DISCORD STATUS SECTION END*/}

              <hr className='my-3 border-profile_content_con_division'/>

              {/* PHILOSOPHY SECTION START*/}
              <div>
                <h3 className='font-black text-[0.6rem] text-profile_section_title mb-1.5'>
                  PHILOSOPHY
                </h3>
                <pre className='font-medium text-xs whitespace-pre-wrap text-profile_section_description_major'>
                  {config.profile_section.philosophy}
                </pre>
              </div>
              {/* PHILOSOPHY SECTION END*/}

              <hr className='my-3 border-profile_content_con_division'/>

              {/* SPOTIFY SECTION START*/}
              <div>
                <div className='w-full flex flex-row items-center justify-between mb-1.5'>
                  <h3 className='font-black text-[0.6rem] text-profile_section_title mb-1.5'>
                    LISTENING TO SPOTIFY
                  </h3>
                  <Image 
                    src={`https://us-east-1.tixte.net/uploads/data_of_omega.tixte.co/spotify.svg`}
                    alt='spotify_icon'
                    width={16}
                    height={16}
                  />
                </div>
                <div className='w-full flex flex-row items-center'>
                  <Image
                    src={data?.data.listening_to_spotify ? data?.data.spotify.album_art_url : "https://us-east-1.tixte.net/uploads/data_of_omega.tixte.co/no_music.png"}
                    alt='album_photo'
                    width={55}
                    height={55}
                    className='rounded mr-2.5'
                  />
                  <div>
                    <h5 className='text-[0.65rem] font-extrabold text-profile_section_description_major'>
                      {data?.data.listening_to_spotify ? data?.data.spotify.song : `No song is playing.`}
                    </h5>
                    <h6 className='text-[0.65rem] font-medium text-profile_section_description_minor'>
                      {data?.data.listening_to_spotify ? `By ${data?.data.spotify.artist}` : `By no one.`}
                    </h6>
                    <h6 className='text-[0.65rem] font-medium text-profile_section_description_minor'>
                      {data?.data.listening_to_spotify ? `In ${data?.data.spotify.album}` : `In no album.`}
                    </h6>
                  </div>
                </div>
              </div>
              {/* SPOTIFY SECTION END*/}

              {/* VS CODE SECTION START*/}
              {/* VS CODE SECTION END*/}

              <hr className='my-3 border-profile_content_con_division'/>

              {/* NOTE SECTION START */}
              <div className='mb-2.5'>
                <h3 className='font-black text-[0.6rem] text-profile_section_title mb-1.5'>
                  NOTE
                </h3>
                <pre className='font-medium text-xs whitespace-pre-wrap text-profile_section_description_major'>
                This website was built using Next.js and Tailwind. The source code is available on <a href="https://github.com/MakerDZ/omega_profile" className='text-[#1E90BE] font-semibold'>GitHub.</a> It was coded with ❤️ by Omega.
                </pre>
              </div>
              {/* NOTE SECTION END */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileSection