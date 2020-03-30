namespace $.$$ {
	export class $todo extends $.$todo {
		add() {
			const name = this.name()
			if (!name.length) return

			$todo_model_task.add( { name: this.name(), stage: 'initial' } )

			this.name( '' )
		}

		rows() {
			const ids = $todo_model_task.ids( )
			return ids.map( ( id ) => this.Task( id ) )
		}

		@ $mol_mem_key
		task_name( id : any ) {
			return $todo_model_task.tasks( id ).name()
		}

		@ $mol_mem_key
		task_stage( id : any ) {
			return $todo_model_task.tasks( id ).stage()
		}

		@ $mol_mem_key
		task_completed( id : any, val? : boolean ) {
			const task = $todo_model_task.tasks( id )
			task.stage( val ? 'completed' : 'initial' )
			return val || false
		}

		task_remove( id : number ) {
			$todo_model_task.remove( id )
		}
	}
}
