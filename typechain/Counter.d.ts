/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';

interface CounterInterface extends ethers.utils.Interface {
  functions: {
    'STATIC_JOB()': FunctionFragment;
    'addCredits(address,uint256)': FunctionFragment;
    'credits(address)': FunctionFragment;
    'work(address,uint256)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'STATIC_JOB', values?: undefined): string;
  encodeFunctionData(functionFragment: 'addCredits', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'credits', values: [string]): string;
  encodeFunctionData(functionFragment: 'work', values: [string, BigNumberish]): string;

  decodeFunctionResult(functionFragment: 'STATIC_JOB', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addCredits', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'credits', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'work', data: BytesLike): Result;

  events: {
    'Worked(address,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Worked'): EventFragment;
}

export class Counter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CounterInterface;

  functions: {
    STATIC_JOB(overrides?: CallOverrides): Promise<[string]>;

    addCredits(_job: string, _credits: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    credits(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    work(_job: string, _credits: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;
  };

  STATIC_JOB(overrides?: CallOverrides): Promise<string>;

  addCredits(_job: string, _credits: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  credits(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  work(_job: string, _credits: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  callStatic: {
    STATIC_JOB(overrides?: CallOverrides): Promise<string>;

    addCredits(_job: string, _credits: BigNumberish, overrides?: CallOverrides): Promise<void>;

    credits(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    work(_job: string, _credits: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    Worked(
      _job?: null,
      _credits?: null,
      _remainingCredits?: null
    ): TypedEventFilter<[string, BigNumber, BigNumber], { _job: string; _credits: BigNumber; _remainingCredits: BigNumber }>;
  };

  estimateGas: {
    STATIC_JOB(overrides?: CallOverrides): Promise<BigNumber>;

    addCredits(_job: string, _credits: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    credits(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    work(_job: string, _credits: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    STATIC_JOB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addCredits(_job: string, _credits: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    credits(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    work(_job: string, _credits: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;
  };
}
