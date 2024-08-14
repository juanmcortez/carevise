<?php

namespace App\Http\Requests\Commons;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDemographicRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title'         => ['nullable', 'string', 'max:12'],
            'first_name'    => ['required', 'string', 'max:128'],
            'middle_name'   => ['nullable', 'string', 'max:128'],
            'last_name'     => ['required', 'string', 'max:128'],
            'date_of_birth' => ['required', 'date', 'date_format:"M d, Y"'],
            'gender'        => ['required', 'string', 'max:128'],
        ];
    }


    /**
     * Get custom attributes for validator errors.
     *
     * @return array<string, string>
     */
    public function attributes(): array
    {
        return [
            'title'         => 'Title',
            'first_name'    => 'First name',
            'middle_name'   => 'Middle name',
            'last_name'     => 'Last name',
            'date_of_birth' => 'Birthdate',
            'gender'        => 'Gender',
        ];
    }
}