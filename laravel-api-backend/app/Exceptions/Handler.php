<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends ExceptionHandler
{
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    public function register(): void
    {
        $this->renderable(function(NotFoundHttpException $event , Request $request){
            if($request->is('api/*')){
                return response()->json([
                    'error' => [
                        'message' => 'Resource not found bro',
                        'type' => 'NotFoundHttpException',
                        'code' => '4405',
                        'link' => 'Example.com/link',
                        'status_code' => (string) $event->getStatusCode(),
                    ]
                ] , 404);
            }
        });
    }
}
