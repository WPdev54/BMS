import React from 'react'
import TransitionFrame from '../transition'
import VoteHero from '@/components/page/voting/Hero'
import VoteLinks from '@/components/page/voting/voteLinks'

const Vote = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <VoteHero />
      <VoteLinks />
      <TransitionFrame />
    </div>
  )
}

export default Vote
