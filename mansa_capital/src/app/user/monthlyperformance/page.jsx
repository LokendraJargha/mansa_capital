"use client";
import { useState } from 'react';
import './style.css';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function Page() {
    const data = {
        "2021": {
            "January": [
                "The best time for new beginnings is now.",
                "The only limit to our realization of tomorrow is our doubts of today.",
                "Keep your face always toward the sunshine—and shadows will fall behind you."
            ],
            "February": [
                "Success is not the key to happiness. Happiness is the key to success.",
                "It always seems impossible until it’s done.",
                "What lies behind us and what lies before us are tiny matters compared to what lies within us."
            ],
            "March": [
                "Happiness is not something ready made. It comes from your own actions.",
                "Life is 10% what happens to us and 90% how we react to it.",
                "Believe you can and you're halfway there."
            ],
            "April": [
                "Your time is limited, don't waste it living someone else's life.",
                "The purpose of our lives is to be happy.",
                "Get busy living or get busy dying."
            ],
            "May": [
                "You have within you right now, everything you need to deal with whatever the world can throw at you.",
                "Don't watch the clock; do what it does. Keep going.",
                "You must be the change you wish to see in the world."
            ],
            "June": [
                "To live is the rarest thing in the world. Most people exist, that is all.",
                "The only way to do great work is to love what you do.",
                "In the end, we will remember not the words of our enemies, but the silence of our friends."
            ],
            "July": [
                "The best revenge is massive success.",
                "To succeed in life, you need two things: ignorance and confidence.",
                "Act as if what you do makes a difference. It does."
            ],
            "August": [
                "The only impossible journey is the one you never begin.",
                "Everything you’ve ever wanted is on the other side of fear.",
                "Hardships often prepare ordinary people for an extraordinary destiny."
            ],
            "September": [
                "It does not matter how slowly you go as long as you do not stop.",
                "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
                "Don’t watch the clock; do what it does. Keep going."
            ],
            "October": [
                "The future belongs to those who believe in the beauty of their dreams.",
                "You are never too old to set another goal or to dream a new dream.",
                "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination."
            ],
            "November": [
                "What we achieve inwardly will change outer reality.",
                "It always seems impossible until it’s done.",
                "You miss 100% of the shots you don’t take."
            ],
            "December": [
                "The best way to predict the future is to create it.",
                "You do not find the happy life. You make it.",
                "The only limit to our realization of tomorrow is our doubts of today."
            ]
        },
        "2022": {
            "January": [
                "The best way to get started is to quit talking and begin doing.",
                "Don't let yesterday take up too much of today.",
                "It's not whether you get knocked down, it's whether you get up."
            ],
            "February": [
                "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
                "Failure will never overtake me if my determination to succeed is strong enough.",
                "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That's the classic entrepreneur."
            ],
            "March": [
                "We may encounter many defeats but we must not be defeated.",
                "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
                "We generate fears while we sit. We overcome them by action."
            ],
            "April": [
                "Whether you think you can or think you can’t, you’re right.",
                "Security is mostly a superstition. Life is either a daring adventure or nothing.",
                "The man who has confidence in himself gains the confidence of others."
            ],
            "May": [
                "The only limit to our realization of tomorrow is our doubts of today.",
                "Creativity is intelligence having fun.",
                "What you get by achieving your goals is not as important as what you become by achieving your goals."
            ],
            "June": [
                "Your limitation—it’s only your imagination.",
                "Push yourself, because no one else is going to do it for you.",
                "Great things never come from comfort zones."
            ],
            "July": [
                "Dream it. Wish it. Do it.",
                "Success doesn’t just find you. You have to go out and get it.",
                "The harder you work for something, the greater you’ll feel when you achieve it."
            ],
            "August": [
                "Dream bigger. Do bigger.",
                "Don’t stop when you’re tired. Stop when you’re done.",
                "Wake up with determination. Go to bed with satisfaction."
            ],
            "September": [
                "Do something today that your future self will thank you for.",
                "Little things make big days.",
                "It’s going to be hard, but hard does not mean impossible."
            ],
            "October": [
                "Don’t wait for opportunity. Create it.",
                "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
                "The key to success is to focus on goals, not obstacles."
            ],
            "November": [
                "Dream it. Believe it. Build it.",
                "Success is not final, failure is not fatal: It is the courage to continue that counts.",
                "The only place where success comes before work is in the dictionary."
            ],
            "December": [
                "Keep going. Everything you need will come to you at the perfect time.",
                "You don’t have to be great to start, but you have to start to be great.",
                "Don’t limit your challenges. Challenge your limits."
            ]
        }
    }
    const [selected,setSelected] = useState("");
    return (
        <>
            <div className="">
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">2024</TableHead>
                            <TableHead>Oct</TableHead>
                            <TableHead>Nov</TableHead>
                            <TableHead>Dec</TableHead>
                            <TableHead>Q4</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">2023</TableCell>
                            <TableCell>Jul</TableCell>
                            <TableCell>Aug</TableCell>
                            <TableCell>Sep</TableCell>
                            <TableCell>Q3</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">2022</TableCell>
                            <TableCell>Apr</TableCell>
                            <TableCell>May</TableCell>
                            <TableCell>Jun</TableCell>
                            <TableCell>Q2</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">2021</TableCell>
                            <TableCell>Jan</TableCell>
                            <TableCell>Feb</TableCell>
                            <TableCell>Mar</TableCell>
                            <TableCell>Q1</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div>
                <p>Plan for [Year 2024]</p>
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>

        </>
    )
}