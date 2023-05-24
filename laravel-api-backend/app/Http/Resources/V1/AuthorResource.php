<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthorResource extends JsonResource
{
    public static $wrap = 'author';

    public function toArray(Request $request): array
    {
        return [
            'type' => 'people',
            'id' => $this->id,
            'attributes' => [
                'name' => $this->name,
                'created_at' => $this->created_at,
            ],
            'links' => [
                'self' => route('authors.show' , $this->id),
            ],
        ];
    }
}
