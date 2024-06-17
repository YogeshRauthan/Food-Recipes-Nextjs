import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "../ui/button"

export default function RecipeList({recipeList}) {
    console.log(recipeList)
    return <div className=" min-h-screen bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className=" p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
            <div className="flex justify-between">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Recipes</h2>
                <Link href={'/'} className="text-lg"><Button>Go Back Home</Button></Link>
            </div>
            <div className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    recipeList && recipeList.length > 0 ?
                    recipeList.map((recipe) => (
                        <Link key={recipe.id} href={`/recipe-list/${recipe.id}`}>
                            <Card>
                                <CardContent>
                                    <div className=" bg-gradient-to-r from-yellow-300 to-orange-300 rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-all">
                                        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                                            <img src={recipe.image} alt={recipe.name} className="h-full w-full object-cover object-center" />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-gray-900">{recipe.name}</h3>
                                            <div className="mt-4 flex items-center flex-wrap gap-2">
                                                <p className="text-lg text-gray-600">
                                                    Rating: {recipe.rating}
                                                </p>
                                                <div className="ml-auto">
                                                    <p className=" font-bold">{recipe.cuisine}</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))
                    : null
                }

            </div>
        </div>
    </div>
}