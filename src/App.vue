<template>
    <div class="w-full px-4 md:px-0 md:w-1/3">
        <div class="rounded shadow-lg border-gray-400 bg-white">
            <div class="px-6 py-6">
                <div>
                    <label class="font-bold text-sm">AE Value</label>
                    <input type="number" class="w-full bg-gray-300 rounded text-lg px-2 py-2 mt-1 appearance-none focus:outline-none focus:shadow-outline" v-model="ae" />
                </div>

                <div class="mt-4">
                    <label class="font-bold text-sm">EW Value</label>
                    <input type="number" class="w-full bg-gray-300 rounded text-lg px-2 py-2 mt-1 appearance-none focus:outline-none focus:shadow-outline" v-model="ew" />
                </div>
            </div>
            <div class="rounded-b border-t border-gray-400 bg-blue-100 flex items-center justify-between">
                <div class="text-center w-1/2 border-r border-gray-400 py-4">
                    <div class="text-xs uppercase font-bold text-gray-600">High</div>
                    <div class="text-xl">{{ calculate(1) }}</div>
                </div>

                <div class="text-center w-1/2">
                    <div class="text-xs uppercase font-bold text-gray-600">Low</div>
                    <div class="text-xl">{{ calculate(0.98) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ae: null,
            ew: null,
        }
    },

    methods: {
        calculate(modifier) {
            if (this.valuesAreEmpty) {
                return '--';
            }

            let result = (100 / this.ae * modifier * this.ew / 100).toFixed(2);

            if (result === 'NaN') {
                return '(error)';
            }

            return result;
        },
    },

    computed: {
        valuesAreEmpty() {
            if(
                this.ae === null
                || this.ae === ''
                || this.ew === null
                || this.ew === ''
            ) {
                return true;
            }

            return false;
        }
    },
}
</script>