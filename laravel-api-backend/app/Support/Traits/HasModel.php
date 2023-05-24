<?PhP 
namespace App\Support\Traits;

trait HasModel{
    public function IsBy(self $model)
    {
        return $this->id === $model->id;
    }
}
