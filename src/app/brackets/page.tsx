'use client';
import React from 'react';
import {Bracket} from 'react-brackets';
import { createClient } from '@supabase/supabase-js'
import PlayerEntry from '@/player-entry';

export default function BracketsPage() {

    const rounds: RoundProps[] = [
        {
          title: 'Round one',
          seeds: [
            {
              id: 1,
              
              teams: [{ name: 'Team A' }, { name: 'Team B' }],
            },
            {
              id: 2,
              
              teams: [{ name: 'Team C' }, { name: 'Team D' }],
            },
          ],
        },
        {
          title: 'Round one',
          seeds: [
            {
              id: 3,
              
              teams: [{ name: 'Team A' }, { name: 'Team C' }],
            },
          ],
        },
      ];

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

); 

    return (
        <div> 
          <PlayerEntry />
            <Bracket rounds={rounds} />;
        </div>
    )
}