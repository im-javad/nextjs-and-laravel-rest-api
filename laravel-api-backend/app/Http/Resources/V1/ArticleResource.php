<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    public static $wrap = 'articles';
    
    public function toArray(Request $request): array
    {
        return [
            'type' => 'article',
            'id' => (string) $this->id,
            'attributes' => [
                'title' => $this->title,
                'slug' => $this->slug,
                'created_at' => $this->created_at,
            ],
            'relationships' => AuthorResource::make($this->author),
            'links' => [
                'self' => route('articles.show' , $this->id),
                'related' => route('articles.show' , $this->slug),
            ],
        ];
    }

    public function with(Request $request)
    {
        return [
            'status' => 'success',
        ];
    }

    public function withResponse(Request $request, JsonResponse $response)
    {
        // $this->header('Accept' , 'application/json');
    }
}
