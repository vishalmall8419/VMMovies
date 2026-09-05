import {
    Rocket,
    Sword,
    Laugh,
    Heart,
    Ghost,
    Drama,
    Search,
    Flame,
    Shield,
    Sparkles,
    Music,
    Trophy,
    Baby,
    Skull,
    Zap,
    Landmark,
} from "lucide-react";

const genreData = {
    action: { icon: Sword, color: "text-red-400" },
    adventure: { icon: Rocket, color: "text-cyan-400" },
    animation: { icon: Sparkles, color: "text-pink-400" },
    comedy: { icon: Laugh, color: "text-yellow-400" },
    crime: { icon: Skull, color: "text-gray-400" },
    drama: { icon: Drama, color: "text-purple-400" },
    fantasy: { icon: Sparkles, color: "text-violet-400" },
    horror: { icon: Ghost, color: "text-green-400" },
    romance: { icon: Heart, color: "text-rose-400" },
    thriller: { icon: Search, color: "text-orange-400" },
    mystery: { icon: Ghost, color: "text-indigo-400" },
    music: { icon: Music, color: "text-fuchsia-400" },
    family: { icon: Baby, color: "text-sky-400" },
    sport: { icon: Trophy, color: "text-amber-400" },
    western: { icon: Shield, color: "text-lime-400" },
    war: { icon: Sword, color: "text-stone-400" },
    history: { icon: Landmark, color: "text-teal-400" },
    "sci-fi": { icon: Zap, color: "text-blue-400" },
};

const GenreCard = ({ genre }) => {
    const data = genreData[genre.trim().toLowerCase()] || {
        icon: Rocket,
        color: "text-cyan-400",
    };

    const Icon = data.icon;

    return (
        <div className="flex flex-nowrap items-center border-[1.5px] border-[#f1f1f138] rounded-2xl text-white bg-[#030631c3] py-3 px-8 gap-4">
            <Icon
                className={data.color}
                strokeWidth={3}
                absoluteStrokeWidth
            />

            <p className="whitespace-nowrap">{genre.trim()}</p>
        </div>
    );
};

export default GenreCard;