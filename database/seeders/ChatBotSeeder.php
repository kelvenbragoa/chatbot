<?php

namespace Database\Seeders;

use App\Models\Answer;
use App\Models\Question;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChatBotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $main = Question::create([
            'title' => 'Menu Principal',
            'message' => 'Olá! Sou o assistente virtual da UCM. Em que posso ajudar?'
        ]);

        $cursos = Question::create([
            'title' => 'Informações sobre Cursos',
            'message' => 'O que deseja saber sobre os cursos?'
        ]);

        Answer::create([
            'question_id' => $main->id,
            'label' => '1️⃣ Informações sobre Cursos',
            'next_question_id' => $cursos->id
        ]);

        Answer::insert([
            [
                'question_id' => $cursos->id,
                'label' => 'Lista de cursos disponíveis',
                'final_message' => 'Veja a lista de cursos no site oficial da UCM: https://ucm.ac.mz'
            ],
            [
                'question_id' => $cursos->id,
                'label' => 'Mudança de curso',
                'final_message' => 'A mudança de curso deve ser solicitada na secretaria com justificativa.'
            ]
        ]);
    }
}
