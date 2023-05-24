<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreArticleRequesr as StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequesr as UpdateArticleRequest;
use App\Http\Resources\V1\ArticleCollection;
use App\Http\Resources\V1\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new ArticleCollection(Article::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArticleRequest $request)
    {
        $validator = $request->validated();

        $newArticle = Article::create([
            'user_id' => auth()->user()->id ?? 1,
            'title' => $validator['title'],
            'slug' => $validator['slug'],
            'body' => $validator['body'],
        ]);

        return (new ArticleResource($newArticle))   
                ->response()
                ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        return (new ArticleResource($article))
                ->response()
                ->setStatusCode(200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        $request->validate([
            'title' => ['sometimes' , 'min:3' , 'max:50' , 'string' , Rule::unique('articles')->ignore($article->title , 'title')],
            'slug' => ['required' , 'min:3' , 'max:75' , 'string'],
            'body' => ['required' , 'min:5' , 'max:150' , 'string'],
        ]);

        $article->update([
            'title' => $request->input('title'),
            'slug' => $request->input('slug'),
            'body' => $request->input('body'),
        ]);
        
        return (new ArticleResource($article))
            ->response()
            ->setStatusCode(200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        $article->delete();

        return response()->json(null, 204);
    }
}
