"use client"
import { motion } from 'framer-motion'
import React from 'react'

const TransitionFrame = () => {
  return (
    <div>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-cyan-500'
        initial={{x:"100%",width:"100%"}}
        animate={{x:"0%",width:"0%"}}
        transition={{duration:0.8,ease:"easeInOut"}}
      />
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-[45] bg-green-500'
        initial={{x:"100%",width:"100%"}}
        animate={{x:"0%",width:"0%"}}
        transition={{delay:0.2 , duration:0.8,ease:"easeInOut"}}
      />
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-[40] bg-gray-500'
        initial={{x:"100%",width:"100%"}}
        animate={{x:"0%",width:"0%"}}
        transition={{delay:0.4 , duration:0.8,ease:"easeInOut"}}
      />
    </div>
  )
}

export default TransitionFrame
