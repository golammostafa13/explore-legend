"use client"
import React, { useState } from 'react';
import Card from './Card';

const ParentOfCard = () => {
    const [playersData, setPlayersData]  =  useState({
        players: [
          {id: 1, name: 'Messi', club: 'Paris', country: 'ARG',},
          {id: 2, name: 'Ronaldo', club: 'Manchester', country: 'POR'}
        ],
        voteForMessi: 0,
        voteForRonaldo: 0
      })
      const voteForMessi = () => {
        setPlayersData((prev) => {
            return {
                ...prev,
                voteForMessi: prev.voteForMessi + 1
            }
        })
      };
    
      const voteForRonaldo = () => {
        setPlayersData((prev) => {
            return {
                ...prev,
                voteForRonaldo: prev.voteForRonaldo + 1
            }
        })
      };
    
      const unVoteForMessi = () => {
        setPlayersData((prev) => {
            return {
                ...prev,
                voteForMessi: prev.voteForMessi - 1
            }
        })
      };
    
      const unVoteForRonaldo = () => {
        setPlayersData((prev) => {
            return {
                ...prev,
                voteForRonaldo: prev.voteForRonaldo - 1
            }
        })
      };
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
           <h2>Vote 🗳 the Best Football player in the world</h2>
           <div><h1>Messi: {playersData.voteForMessi} </h1> - <h1> {playersData.voteForRonaldo}: Ronaldo</h1></div>
          <div className='container'>
            {
              playersData.players.map((player) => (
                <div key={player.id} className="card">
                  <Card
                   player={player}
                   increaseVoteCount={player.id === 1 ? voteForMessi : voteForRonaldo}
                   decreaseVoteCount={player.id === 1 ? unVoteForMessi : unVoteForRonaldo}
                  />
                </div>
              ))
            }
          </div>
          {/* Example of via props */}
          {/* <ViaProps count={count.get()} /> */}
    
    
        </main>
    )
};

export default ParentOfCard;