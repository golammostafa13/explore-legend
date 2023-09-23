import React from "react";
import { Computed } from '@legendapp/state/react';

const Card = (props: { player: any; increaseVoteCount: any; decreaseVoteCount: any; }) => {
    const { player, increaseVoteCount, decreaseVoteCount } = props
    return (
        <section className="container">
            <h1 className="text-green-800">Name: {player.name}</h1>
            <h3 className="text-green-900">Country: {player.country}</h3>
            <p className="text-green-950">Club: {player.club}</p>
               <button className="rounded-md bg-orange-600 p-3 mr-3" onClick={() => increaseVoteCount(player.id)}>Vote</button>
               <button className="rounded-md bg-orange-600 p-3" onClick={() => decreaseVoteCount(player.id)}>Un-vote</button>
        </section>
    )
};
export default Card;