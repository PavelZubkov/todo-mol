namespace $ {
	export class $todo_model_task extends $mol_object2 {
		@ $mol_mem
		static ids( val? : any[] ) {
			return val !== undefined ? val : []
		}

		@ $mol_mem
		static new_id() {
			return 1 + Math.max( 0 , ... this.ids() )
		}

		@ $mol_mem_key
		static tasks( id : any , val? : any , force? : $mol_mem_force ) {
			return ( val !== void 0 ) ? val : null as any
		}

		static add( new_task : { name : string, stage : string } ) {
			const task = new $todo_model_task
			const id = $todo_model_task.new_id()

			task.id( id )
			task.name( new_task.name )
			task.stage( new_task.stage )

			$todo_model_task.ids( [ ... this.ids( ) , id ] )
			$todo_model_task.tasks( id, task )

			return task
		}

		static remove( id : number ) {
			const task = this.tasks( id )
			this.ids( this.ids().filter( id2 => id2 !== id ) )
			this.tasks( id, null )
			return task
		}

		@ $mol_mem
		id( val : number ) {
			return ( val !== undefined ) ? val : null
		}

		@ $mol_mem
		name( val : string ) {
			return ( val !== undefined ) ? val : null
		}

		@ $mol_mem
		stage( val : string ) {
			return ( val !== undefined ) ? val : null
		}
	}
}
