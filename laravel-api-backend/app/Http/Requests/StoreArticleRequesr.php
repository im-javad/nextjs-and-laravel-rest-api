<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreArticleRequesr extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => ['sometimes' , 'min:3' , 'max:50' , 'string' , 'unique:articles,title'],
            'slug' => ['required' , 'min:3' , 'max:75' , 'string'],
            'body' => ['required' , 'min:5' , 'max:150' , 'string'],
        ];
    }
}
