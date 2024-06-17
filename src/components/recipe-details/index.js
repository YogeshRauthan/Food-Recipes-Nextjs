import Link from "next/link";
import { Button } from "../ui/button";


export default function RecipeItemDetails ({getRecipeDetails}) {
    return <div className="min-h-screen bg-gradient-to-r from-orange-300 to-yellow-300">
        <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
            <div className="mb-4">
                <Link href={'/recipe-list'}><Button>Go Back to Recipe List</Button></Link>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="w-full lg:sticky top-0 sm:flex gap-2">
                    <img src={getRecipeDetails?.image} alt={getRecipeDetails?.name} className="w-4/5 rounded-md object-cover" />

                </div>
                <div>
                    <h3 className=" text-3xl font-bold text-gray-900">{getRecipeDetails.name}</h3>
                    <div className="gap-4 mt-5">
                        <p className="text-2xl text-gray-700">{getRecipeDetails?.mealType[0]}</p>
                    </div>
                    <div>
                        <p className="text-xl text-gray-700">{getRecipeDetails?.cuisine}</p>
                    </div>
                    <div className=" mt-4">
                        <h3 className="text-lg font-semibold text-gray-700">Ingredients</h3>
                        <ul className=" text-gray-700 space-y-3 list-disc mt-4 pl-4 text-sm">
                            {getRecipeDetails?.ingredients.map((item) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
            <div className=" mt-4">
                        <h3 className="text-lg font-bold text-gray-700">Instructions</h3>
                        <ul className=" text-gray-700 space-y-3 list-disc mt-4 pl-4 text-sm">
                            {getRecipeDetails?.instructions.map((item) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </div>
        </div>
    </div>
}