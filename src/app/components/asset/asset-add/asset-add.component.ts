import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {UUID} from 'angular2-uuid';
import {Observable} from 'rxjs/Observable';
import * as assetAction from '../../../actions/asset.action';
import {InterfaceAsset} from '../../../interfaces/InterfaceAsset';
import {InterfaceAssetTypes} from '../../../interfaces/InterfaceAssetTypes';
import {InterfaceStateApp} from '../../../interfaces/InterfaceStateApp';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-asset-add',
  templateUrl: './asset-add.component.html',
  styleUrls: ['./asset-add.component.scss'],
})
export class AssetAddComponent implements OnInit {

  form: InterfaceAsset = {
    id: null,
    asset_type_id: 3,
    name: null,
  };

  assetTypes$: Observable<InterfaceAssetTypes[]>;

  constructor(private store: Store<InterfaceStateApp>) {
    this.assetTypes$ = this.store.select(fromRoot.getAssetTypes);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.form.id = UUID.UUID();
    this.store.dispatch(new assetAction.AssetAdd(this.form));
  }

}