export default function Action() {
    return (
        <div>
            <WeeklyReflection />

        </div>
    )
}

const WeeklyReflection = () => {
    return (
        <div className="flex flex-col gap-3">
            <p className="text-xl font-bold">Weekly Reflection</p>
            <p>On Scale of 1-10 , how happy were you this week and why?</p>
            <input type="range" min="1" max="100" class="slider" id="myRange" />
            <p>What were your three big wins for the week?</p>
            <input type="text" placeholder="1.Do this" className="w-1/2 border p-2" />
            <input type="text" placeholder="2.Do this" className="w-1/2 border p-2" />
            <input type="text" placeholder="3.Do this" className="w-1/2 border p-2" />
            <p>
                Did you take all trades according to the plan? If not, how will you
                improve next week? Are there specific areas you need to improve upon?
            </p>
            <textarea
                rows={5}
                type="text"
                placeholder=""
                className="w-1/2 border p-2"
            />
            <p>
                What was the biggest lesson you learned this week? Were there common
                patterns or mistakes in your trades?
            </p>
            <textarea
                rows={5}
                type="text"
                placeholder=""
                className="w-1/2 border p-2"
            />
            <p>
                What are the three big milestones that if you hit would make next week a
                win for you?
            </p>
            <input type="text" placeholder="1.Do this" className="w-1/2 border p-2" />
            <input type="text" placeholder="2.Do this" className="w-1/2 border p-2" />
            <input type="text" placeholder="3.Do this" className="w-1/2 border p-2" />
            <p>
                What might prevent you from achieving these milestones and what can you
                do to get around it?
            </p>
            <textarea
                rows={5}
                type="text"
                placeholder=""
                className="w-1/2 border p-2"
            />
        </div>
    );
};